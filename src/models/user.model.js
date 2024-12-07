class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static register(userObj) {
    const newUser = new UserModel(
      users.length + 1,
      userObj.name,
      userObj.email,
      userObj.password
    );

    users.push(newUser);
  }

  static login(userObj) {
    let user = users.find(
      (u) => u.email == userObj.email && u.password == userObj.password
    );

    if (user) {
      return user;
    } else {
      console.log("INVALID CREDIENTIALS!");
      return false;
    }
  }
}

var users = [];

export default UserModel;
