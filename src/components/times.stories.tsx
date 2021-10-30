import React, { useState } from 'react'
import { DatePicker, ConfigProvider, Card, Divider, Button } from "antd";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import commUtils from './index';
import moment from 'moment';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const defaultComponent = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');  
  return <ConfigProvider locale={zhCN}>
    <Card title="禁止选择星期天">
      <DatePicker
        disabledDate={e => commUtils.disableDateWeek(e)}
      />
    </Card>
    <Card title="禁止日期选择区间">
      <DatePicker
        onChange={(e)=>{
          setStartDate(commUtils.backFormatDate(e));
        }}
        disabledDate={e => commUtils.disabledStartDt(e, startDate, endDate)}
      />
      &nbsp;-&nbsp;
      <DatePicker
        onChange={(e)=>{
          setEndDate(commUtils.backFormatDate(e));
        }}
        disabledDate={e => commUtils.disabledEndDt(e, startDate, endDate)}
      />
    </Card>
    <Card title="传入日期，返回指定格式的日期">
      {'commUtils.backFormatDate("20200901")'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('commUtils.backFormatDate("20200901")', commUtils.backFormatDate("20200901"));
        }}
      >
        点击在console查看
      </Button>
      <Divider />
      {'commUtils.backFormatDate("20200901", "YYYY_MM_DD")'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('commUtils.backFormatDate("20200901", "YYYY_MM_DD")', commUtils.backFormatDate("20200901", "YYYY_MM_DD"));
        }}
      >
        点击在console查看
      </Button>
      <Divider />
      获取当前日期: {'commUtils.backFormatDate("today", "YYYY-MM-DD")'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('commUtils.backFormatDate("today", "YYYY-MM-DD")', commUtils.backFormatDate("today", "YYYY-MM-DD"));
        }}
      >
        点击在console查看
      </Button>
    </Card>
  </ConfigProvider>
}
storiesOf('时间组件常用方法', module)
  .add('时间组件常用方法', defaultComponent)