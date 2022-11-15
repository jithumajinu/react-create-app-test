const userDetail = {
  id: 1,
  name: 'Foo',
  job: 'Noob developer',
  place: 'Mars',
};

function getUser(user: any) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (user === 'foo') return resolve(userDetail);
      return reject('No such user');
    }, 2000)
  );
}

export default getUser;
