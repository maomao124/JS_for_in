/**
 * Project name(项目名称)：JS_for_in
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/2
 * Time(创建时间)： 21:23
 * Version(版本): 1.0
 * Description(描述)： 无
 */

// 定义一个对象
var person = {"name": "Clark", "surname": "Kent", "age": "36"};
// 遍历对象中的所有属性
for (var prop in person)
{
    document.write("<p>" + prop + " = " + person[prop] + "</p>");
}