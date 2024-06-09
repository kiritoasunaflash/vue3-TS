// 获取当天的时间
export const getHours = () => {
  let message = "";
  let hours = new Date().getHours();
  if (6 <= hours && hours <= 9) {
    message = "早上好啊";
  } else if (hours < 12) {
    message = "上午好啊";
  } else if (hours < 18) {
    message = "下午好啊";
  } else {
    message = "晚上好啊";
  }
  return message;
};
