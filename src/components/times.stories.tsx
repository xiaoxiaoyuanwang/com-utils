import React, { useState } from 'react'
import { DatePicker, ConfigProvider, Card, Divider, Button } from "antd";
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { disableDateWeek, disabledStartDt, disabledEndDt, backFormatDate } from './times'
import moment from 'moment'
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const formatDate = "YYYY-MM-DD"
const defaultComponent = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');  
  return <ConfigProvider locale={zhCN}>
    <Card title="禁止选择星期天">
      <DatePicker
        disabledDate={e => disableDateWeek(e)}
      />
    </Card>
    <Card title="禁止日期选择区间">
      <DatePicker
        onChange={(e)=>{
          setStartDate(backFormatDate(e));
        }}
        disabledDate={e => disabledStartDt(e, startDate, endDate)}
      />
      &nbsp;-&nbsp;
      <DatePicker
        onChange={(e)=>{
          setEndDate(backFormatDate(e));
        }}
        disabledDate={e => disabledEndDt(e, startDate, endDate)}
      />
    </Card>
    <Card title="传入日期，返回指定格式的日期">
      {'backFormatDate("20200901")'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('backFormatDate("20200901")', backFormatDate("20200901"));
        }}
      >
        点击在console查看
      </Button>
      <Divider />
      {'backFormatDate("20200901", "YYYY_MM_DD")'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('backFormatDate("20200901", "YYYY_MM_DD")', backFormatDate("20200901", "YYYY_MM_DD"));
        }}
      >
        点击在console查看
      </Button>
      <Divider />
      获取当前日期: {'backFormatDate("today", "YYYY-MM-DD")'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('backFormatDate("today", "YYYY-MM-DD")', backFormatDate("today", "YYYY-MM-DD"));
        }}
      >
        点击在console查看
      </Button>
    </Card>
  </ConfigProvider>
}
storiesOf('时间组件常用方法', module)
  .add('时间组件常用方法', defaultComponent)