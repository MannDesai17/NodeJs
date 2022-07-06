function extraEnd(str){
if(str.length-1<1)
{
return str + str + str;
}
else
{
String newstr=str.substring(str.length-2,str.length);
return newstr + newstr + newstr;
}
}