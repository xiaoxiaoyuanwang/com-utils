import React, { useState } from 'react'
import { Button, Card, Divider } from "antd";
import { storiesOf } from '@storybook/react';
import { checkTypeBackArray, checkTypeBackString } from './arrays';
const defaultComponent = () => {
  const [dt, setDt] = useState(null)
  return <React.Fragment>
    <Card title="将传入数据转换成数组并返回">
      {'checkTypeBackArray("1,2,3,4")'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('checkTypeBackArray("1,2,3,4")', checkTypeBackArray("1,2,3,4"));
        }}
      >
        点击在console查看
      </Button>
      <Divider />
      {'checkTypeBackArray("1;2;3;4", ";")'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('checkTypeBackArray("1;2;3;4", ";")', checkTypeBackArray("1;2;3;4", ";"));
        }}
      >
        点击在console查看
      </Button>
    </Card>
    <Card title="将传入数据转换成字符串并返回">
      {'checkTypeBackString([1,2,3,4])'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('checkTypeBackString([1,2,3,4])', checkTypeBackString([1,2,3,4]));
        }}
      >
        点击在console查看
      </Button>
      <Divider />
      {'checkTypeBackString([1,2,3,4], ";")'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('checkTypeBackString([1,2,3,4], ";")', checkTypeBackString([1,2,3,4], ";"));
        }}
      >
        点击在console查看
      </Button>
    </Card>

  </React.Fragment>
}
storiesOf('数组组件常用方法', module)
  .add('数组组件常用方法', defaultComponent)