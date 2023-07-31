# JavaScript 手写代码

## 防抖-debounce (一定时间内，只执行最后一次触发的结果)

```
function debounce(fn,delay){
    let timer = null
    return function(){
        clearTimeOut(time)
        const self = this
        const args = arguments
        timer = setTimeOut(function(){
            fn.apply(self,args)   //apply传递的是数组
        },delay)
    }
}
```
