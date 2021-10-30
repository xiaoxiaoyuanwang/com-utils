import React, { useState } from 'react';
import { Button, Card, Divider, Input } from "antd";
import { storiesOf } from '@storybook/react';
import commUtils from './index';
const defaultComponent = () => {
  const [numberVal, setNumberVal] = useState();
  let obj = {
    a: {
      b: {
        c: {
          d: {
            e: "到底了"
          }
        }
      }
    }
  }
  let objPrep = {
    a: 1,
    b: 2
  }
  let objNew = {
    a: 11,
    b: 2
  }
  return <React.Fragment>
    <Card title="判断对象多层结构数据是否存在、 不存在返回undefined">
      obj: {JSON.stringify(obj)}<br />
      {'commUtils.checkHasData(obj,["a","b","c","d"])'}
      <br />
      <Button
        type="primary"
        onClick={() => {
          console.log('commUtils.checkHasData(obj,["a","b","c","d"])', commUtils.checkHasData(obj, ["a", "b", "c", "d"]));
        }}
      >
        点击在console查看
      </Button>
      <Divider />
      {'commUtils.checkHasData(obj,["a","b","c","dd"])'}
      <br />
      <Button
        type="primary"
        onClick={() => {
          console.log('commUtils.checkHasData(obj,["a","b","c","dd"])', commUtils.checkHasData(obj, ["a", "b", "c", "dd"]));
        }}
      >
        点击在console查看
      </Button>
    </Card>
    <Card title="判断对象1中的值在对象2中是否相等 相等返回 true, 如果有一个值不相等返回false, objNew中新加的字段不作处理">
      objPrep: {JSON.stringify(objPrep)}<br />
      objNew: {JSON.stringify(objNew)}<br />
      {'commUtils.compareDataBlur(objPrep, objPrep)'}
      <br />
      <Button
        type="primary"
        onClick={() => {
          console.log('commUtils.compareDataBlur(objPrep, objNew)', commUtils.compareDataBlur(objPrep, objNew));
        }}
      >
        点击在console查看
      </Button>
      <Divider />
      {'commUtils.compareDataBlur(objPrep, objNew, ["a"])'}
      <br />
      <Button
        type="primary"
        onClick={() => {
          console.log('commUtils.compareDataBlur(objPrep, objNew, ["a"])', commUtils.compareDataBlur(objPrep, objNew, ["a"]));
        }}
      >
        点击在console查看
      </Button>
    </Card>
  </React.Fragment>
}
storiesOf('对象组件常用方法', module)
  .add('对象组件常用方法', defaultComponent)