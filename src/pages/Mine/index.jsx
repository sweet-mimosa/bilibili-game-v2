import React from 'react'
import { MineWrapper } from './style'
import userface from '@/assets/images/user.jpg'
import { List } from 'antd-mobile'
import {
    CalculatorOutline,
    ClockCircleOutline,
    MessageOutline,
    HeartOutline,
    StarOutline,
    GiftOutline,
    HandPayCircleOutline,
    SetOutline
  } from 'antd-mobile-icons'
export default function Mine() {
    return (
        <MineWrapper>
            <div className="userInfo">
                <div className="user" style={{opacity:1}}>
                    <div className="user-info-content">
                        <div className="user-brief">
                            <div className="user-name">特仑苏</div>
                            <div className="user-sex fa fa-male"></div>
                            <div className="user-level">LV5</div>
                            <span className="icon fa fa-angle-right"></span>
                        </div>
                        <div className="user-face">
                            <img src={userface} className="user-ipc" style={{width:"100%",height:"100%"}}/>
                        </div>
                    </div>
                    <div className="login-hint">
                        <div className="user-unique">
                            <div className="uid">UID</div>
                            <div className="user-uid">23665853</div>
                        </div>
                        <div className="btn-user-list">
                            <div className="user-btn">
                                <span className="interset-txt">关注</span>
                                <span className="interset-num">900</span>
                            </div>
                            <div className="user-btn">
                                <span className="interset-txt">粉丝</span>
                                <span className="interset-num">900</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <List style={{paddingBottom:"0.7rem"}}>
                <List.Item 
                    prefix={<CalculatorOutline style={{color:"#8986f1"}}/>} 
                    style={{fontSize:"0.5rem",lineHeight:"1.2rem"}} 
                    extra="12" 
                    onClick={() => {}}
                >
                    已玩游戏
                </List.Item>
                <List.Item 
                    prefix={<ClockCircleOutline style={{color:"#4fbdea"}}/>} 
                    style={{fontSize:"0.5rem",lineHeight:"1.2rem"}} 
                    extra="0" 
                    onClick={() => {}}
                >
                    预约游戏
                </List.Item>
                <List.Item 
                    prefix={<MessageOutline style={{color:"#3dcdc3"}}/>} 
                    style={{fontSize:"0.5rem",lineHeight:"1.2rem"}} 
                    extra="0" 
                    onClick={() => {}}
                >
                    我的评价
                </List.Item>
                <List.Item 
                    prefix={<HeartOutline style={{color:"#8bd29b"}}/>} 
                    style={{fontSize:"0.5rem",lineHeight:"1.2rem"}} 
                    extra="12" 
                    onClick={() => {}}
                >
                    关注的游戏
                </List.Item>
                <List.Item 
                    prefix={<StarOutline style={{color:"#ffc041"}}/>} 
                    style={{fontSize:"0.5rem",lineHeight:"1.2rem"}} 
                    extra="18" 
                    onClick={() => {}}
                >
                    我的收藏
                </List.Item>
                <List.Item 
                    prefix={<GiftOutline style={{color:"#fb7299"}}/>} 
                    style={{fontSize:"0.5rem",lineHeight:"1.2rem"}} 
                    extra="10" 
                    onClick={() => {}}
                >
                    我的礼包
                </List.Item>
                <List.Item 
                    prefix={<HandPayCircleOutline style={{color:"#fb7299"}}/>} 
                    style={{fontSize:"0.5rem",lineHeight:"1.2rem"}} 
                    onClick={() => {}}
                >
                    大会员礼包
                </List.Item>
            </List>
            <List>
                <List.Item 
                    prefix={<SetOutline style={{color:"#4fbdea"}}/>} 
                    style={{fontSize:"0.5rem",lineHeight:"1.2rem"}} 
                    onClick={() => {}}
                >
                    设置与反馈
                </List.Item>
            </List>
        </MineWrapper>
    )
}