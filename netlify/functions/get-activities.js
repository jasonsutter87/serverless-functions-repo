// import fetch from 'node-fetch';

const response = await fetch('https://developer.nps.gov/api/v1/activities?api_key=aChgBlCacUHuXxwo6FnjXeXCvW9L4jYWdTGQLCXM');
const data = await response.json();

console.log(data);
