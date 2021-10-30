import React, { useState } from 'react'
import { Button, Card, Divider, Input } from "antd";
import { storiesOf } from '@storybook/react'
import { inputOnlyNumber, changeToThousand, stringToThousand } from './numbers';
const defaultComponent = () => {  
  const [numberVal, setNumberVal] = useState();
  const [numberValThousand, setNumberValThousand] = useState();
  const [numberValMinu, setNumberValMinu] = useState();
  return <React.Fragment>
    <Card title="输入正数限制，解析不出来返回undefined">
      <Input
        style={{width: 200, marginRight: 20}}
        onChange={(e)=>{
          setNumberVal(inputOnlyNumber(e.target.value))
        }}
        value={numberVal}
      />
      <Button
        type="primary"
        onClick={() => {
          console.log("输入正数限制，解析不出来返回undefined", numberVal);
        }}
      >
        点击在console查看
      </Button>
    </Card>
    <Card title="数字千分位分割">
      <Input
        style={{width: 200, marginRight: 20}}
        onChange={(e)=>{
          setNumberValThousand(changeToThousand(inputOnlyNumber(e.target.value)))
        }}
        value={numberValThousand}
      />
      <Button
        type="primary"
        onClick={() => {
          console.log("数字千分位分割", numberValThousand);
        }}
      >
        点击在console查看
      </Button>
    </Card>
    <Card title="千位字符串转正常数字">
      <Input
        style={{width: 200, marginRight: 20}}
        onChange={(e)=>{
          setNumberValThousand(changeToThousand(inputOnlyNumber(e.target.value)))
        }}
        value={numberValThousand}
      />
      <Button
        type="primary"
        onClick={() => {
          console.log("千位字符串转正常数字", stringToThousand(numberValThousand));
        }}
      >
        点击在console查看
      </Button>
    </Card>
    <Card title="千位字符串转正常数字22">
      <Input
        style={{width: 200, marginRight: 20}}
        onChange={(e)=>{
          setNumberValMinu(inputOnlyNumber(e.target.value, 2, true))
        }}
        value={numberValMinu}
      />
      <Button
        type="primary"
        onClick={() => {
          console.log("千位字符串转正常数字", stringToThousand(numberValMinu));
        }}
      >
        点击在console查看
      </Button>
    </Card>
  </React.Fragment>
}
storiesOf('数字组件常用方法', module)
  .add('数字组件常用方法', defaultComponent)