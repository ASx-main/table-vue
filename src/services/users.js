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
  let age = currentDay.getFullYear() - birthday.getFullYear();
  const month = currentDay.getMonth() - birthday.getMonth();
  if (month < 0 || (month === 0 && currentDay.getDate() < birthday.getDate() + 1)) {
    age -= 1;
  }
  return age;
  // Возраст учитывается только по годам
}

function prepareUser(userArg, userInterfaceArg, excludeKeysArg) {
  let newUser = {};

  Object.keys(userInterfaceArg).forEach((key) => {
    if (userInterfaceArg[key] === 'string' && !excludeKeysArg.includes(key)) {
      newUser[key] = userArg[key] ?? 'Нет данных';
    }

    if (typeof userInterfaceArg[key] === 'object' && !excludeKeysArg.includes(key)) {
      newUser = {...newUser, ...prepareUser(userArg[key], userInterfaceArg[key], excludeKeysArg)} ;
      newUser.age = getAge(userArg.person.birthday).toString()
    }
  });

  return newUser;
}

function factoryUsers(usersArg, usersInterfaceArg, excludeKeysArg) {
  return usersArg.map((user) => prepareUser(user, usersInterfaceArg, excludeKeysArg));
}

export default factoryUsers(users, userInterface, excludeKeys);
