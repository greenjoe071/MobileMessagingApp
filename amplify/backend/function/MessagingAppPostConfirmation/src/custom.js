
const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();

const TableName = process.env.USERTABLE;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger... 
  //     the event coming from DyanamDB trigger will contain the userAttributes
  //     and the event will contain the request.
  //     the userAttributes will contain sub, email,
  //        something like this event.request.userAttributes.(sub, email, )
  // trying to save the new user that just signed up to DyanmoDB

  if (!event?.request?.userAttributes?.sub) {
    console.log("no sub provided")
    return;
  }

  const now = new Date();
  const timestamp = now.getTime();

  const userItem = {
    id: { S: event.request.userAttributes.sub },
    name: { S: event.request.userAttributes.email },
    __typename: { S: "User" },
    _lastChangedAt: { N: timestamp.toString() },
    _version : { N: "2" },
    createdAt: { S: now.toISOString() },
    updatedAt: { S: now.toISOString() },



  }

  const params = {
    Item: userItem,
    TableName: TableName,
  };


  try {
  await ddb.putItem(params).promise();
  console.log("it works")
} catch (e){
  console.log(e)
}

  return event
};
