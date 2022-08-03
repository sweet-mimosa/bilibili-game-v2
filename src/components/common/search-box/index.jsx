import React, { useEffect, memo, useState, useRef, useMemo } from "react";
import styled from "styled-components";
import { debounce } from "@/api/utils";


const SearchBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.3rem;
    width: 100%;
    height: 1.47rem;
    background: white;
    .icon-back{
        font-size: 0.57rem;
        color: #20aae2;
        padding-right: 0.5rem;
        margin-left: 0.17rem;
    }
    .icon-search{
        font-size: 0.57rem;
        color: #20aae2;
        padding-left: 0.25rem;
        margin-right: 0.17rem;
    }
    .box{
        flex: 1;
        line-height: 0.9rem;
        margin: 0 0.25rem;
        background: white;
        color: #20aae2;
        font-size: 0.5rem;
        outline: none;
        border: none;
        border-bottom: #20aae2;
        &::placeholder{
            color: gray;
        }
    }
    .icon-delete{
        font-size: 0.57rem; // 16px?
        color: #20aae2;
        
    }
`
const SearchBox = (props) => {
    const queryRef = useRef();
    // 解构父组件props 分两部分
    // 读取props状态
    const { newQuery } = props;
    // 读取方法
    const { handleQuery,back } = props;
    const [ query,setQuery ] = useState('');

    // 父组件传过来的函数进行封装
    // 优化再升级
    // useMemo 可以缓存上一次函数计算的结果
    let handleQueryDebounce = useMemo(() => {
        return debounce(handleQuery,1000);
    },[handleQuery]);

    const displayStyle = query ? {display:"block"} : {display:"none"};

    const clearQuery = () => {
        setQuery('');
        queryRef.current.value = "";
    }
    const handleChange = (e) => {
        let val = e.currentTarget.value;
        setQuery(val);
    }

    // mount时的生命周期
    useEffect(() => {
        // 挂载后 生命周期
        queryRef.current.focus();
    },[]);

    // 使用useEffect去更
    useEffect(() => {
        // query 更新
        // console.log(query);
        // console.log(queryRef);
        // let curQuery = query;
        handleQueryDebounce(query);
    },[query]);

    useEffect(() => {
        // mount时执行生命周期 父组件 newQuery -> input query
        // newQuery更新时执行
        let curQuery = query;
        if(newQuery !== query){
            curQuery = newQuery;
            queryRef.current.value = newQuery;
        }
        setQuery(curQuery);
    },[newQuery]);

    return (
        <SearchBoxWrapper>
            <i className="fa fa-arrow-left icon-back" onClick={() => back()}></i>
            <input type="text" 
                className="box"
                placeholder="搜索游戏或攻略"
                ref={queryRef}
                onChange={handleChange}
                
            />
            <i className="fa fa-close icon-delete" 
                style={displayStyle}
                onClick={clearQuery}
            >
            </i>
            <i className="fa fa-search icon-search" onClick={() => {}}></i>
        </SearchBoxWrapper>
    )
}

export default memo(SearchBox);