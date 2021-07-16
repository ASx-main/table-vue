/* eslint-disable */
import users from '../users.json';

const userInterface = {
  username: 'string',
  phone: 'string',
  email: 'string',
  person: {
    name: 'string',
    surname: 'string',
    birthday: 'string',
  },
  do_not_show_it_in_UI: 'string',
};

const excludeKeys = ['do_not_show_it_in_UI'];

function getAge(date) {
  const birthday = new Date(date);
  const currentDay = new Date();
  return currentDay.getFullYear() - birthday.getFullYear();
  // Возраст учитывается только по годам. (есть проблема, что в текущей дате путается месяц и день. надо фиксить, пока не разобралась почему)
}

function prepareUser(userArg, userInterfaceArg, excludeKeysArg) {
  const newUser = {};

  Object.keys(userInterfaceArg).forEach((key) => {
    if (userInterfaceArg[key] === 'string' && !excludeKeysArg.includes(key)) {
      newUser[key] = userArg[key] ?? 'Нет данных';
    }

    if (typeof userInterfaceArg[key] === 'object' && !excludeKeysArg.includes(key)) {
      newUser[key] = prepareUser(userArg[key], userInterfaceArg[key], excludeKeysArg);
      newUser.age = getAge(userArg.person.birthday).toString()
    }
  });

  return newUser;
}

function factoryUsers(usersArg, usersInterfaceArg, excludeKeysArg) {
  return usersArg.map((user) => prepareUser(user, usersInterfaceArg, excludeKeysArg));
}

export default factoryUsers(users, userInterface, excludeKeys);
