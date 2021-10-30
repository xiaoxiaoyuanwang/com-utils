import React, { useState } from 'react'
import { Button, Card, Divider } from "antd";
import { storiesOf } from '@storybook/react';
import commUtils from './index';
const defaultComponent = () => {
  const [dt, setDt] = useState(null)
  return <React.Fragment>
    <Card title="将传入数据转换成数组并返回">
      {'commUtils.checkTypeBackArray("1,2,3,4")'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('commUtils.checkTypeBackArray("1,2,3,4")', commUtils.checkTypeBackArray("1,2,3,4"));
        }}
      >
        点击在console查看
      </Button>
      <Divider />
      {'commUtils.checkTypeBackArray("1;2;3;4", ";")'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('commUtils.checkTypeBackArray("1;2;3;4", ";")', commUtils.checkTypeBackArray("1;2;3;4", ";"));
        }}
      >
        点击在console查看
      </Button>
    </Card>
    <Card title="将传入数据转换成字符串并返回">
      {'commUtils.checkTypeBackString([1,2,3,4])'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('commUtils.checkTypeBackString([1,2,3,4])', commUtils.checkTypeBackString([1,2,3,4]));
        }}
      >
        点击在console查看
      </Button>
      <Divider />
      {'commUtils.checkTypeBackString([1,2,3,4], ";")'}
      <br />
      <Button
        type="primary"
        onClick={()=>{
          console.log('commUtils.checkTypeBackString([1,2,3,4], ";")', commUtils.checkTypeBackString([1,2,3,4], ";"));
        }}
      >
        点击在console查看
      </Button>
    </Card>

  </React.Fragment>
}
storiesOf('数组组件常用方法', module)
  .add('数组组件常用方法', defaultComponent)