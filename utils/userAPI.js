class userAPI {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }


  signup() {
    const code = Math.floor(1000 + Math.random() * 9000);
    const first_name = this.queryString.first_name;
    const last_name = this.queryString.last_name;
    const mobile = this.queryString.mobile;
    const timestamp = new Date().getTime();
    // const timestamp = md5(Time);
    // const newUser = await user.create({first_name,last_name,mobile,verification_code:code,timestamp});
    this.query = this.query.create({ first_name, last_name, mobile, verification_code: code, timestamp });

    return this;
  }
  userValidationWithCode() {
    const theUser = this.query.find({ mobile: this.queryString.mobile });
    if (this.queryString.code === theUser[0].verification_code) {
      let Time = new Date().getTime();
      //   console.log(Time);
      const token = md5(Math.floor(Math.random() * (999999 - 1 + 1) + 1) * Time);
      user.findByIdAndUpdate(theUser[0]._id, { token: token });
      const message = "You have been successfully signed up";
    } else {
      const message = "the code is incorrect";
    }
    return this;
  }







}
module.exports = userAPI;