'use strict';
var CronJob = require('cron').CronJob;

class Schedule {
  constructor(){
    this.schedules = [];
  }

  add(str,func){
    var cronJob = new CronJob(str,func,null,true,"Asia/Tokyo")
    this.schedules.push(cronJob);
  }

  remove(count){
    this.schedules[count].stop
    this.schedules.splice(count,1)
  }

}

module.exports = {Schedule : Schedule};
