import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1>Difference between Js and Nodejs?</h1>
      <p>
        Js is a programming language abd nodejs is a runtime environment of
        js.We mainly use js in client side and we mainly use Node js in server
        side.
      </p>
      <h1>Difference between sql and no sql?</h1>
      <p>
        SQL means structured query language .It is very powerful and having
        various kind of different rules But no sql is very flexible and having
        different dynamic schemas.Example of sql id MYSQL and no sql is MONGODB.
      </p>
      <h1>When we use nodejs and whrn we use mongodb?</h1>
      <p>
        {" "}
        We use node js to make a connection betwwn the mongodb database and
        client side .The code of nodejs is the server side code which makes a
        connection between client side and database.
      </p>
    </div>
  );
};

export default Blogs;
