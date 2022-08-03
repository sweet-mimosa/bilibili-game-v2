import React from 'react'
import './style.css'
import Scroll from '../common/Scroll'
import { forceCheck } from 'react-lazyload'

export default function New({gameList}) {
    const rendernew = () => {
        return(
            gameList.map((item) => (
                <div className="bui-mod-wrap home-content"  key={item.id}>
                    <div className="bui-mod-content">
                        <div className="bui-list-topic-index">
                        <div className="today-recommend content-item">
                                <p><img src={item.img} className="feed-bg item-pic" /></p>
                                <div className="tag">今日推荐</div>
                                <div className="card-info">
                                    <div className="game-info">
                                        <img src={item.icon} alt="" className="game-icon" />
                                        <span className="name-tag">
                                            <div className="game-name">{item.title}</div>
                                            <div className="type-name"></div>
                                            <div className="tags">
                                                <span className="tag-name">{item.tag1}</span>
                                                <span className="tag-name">{item.tag2}</span>
                                                <span className="tag-name">{item.tag3}</span>
                                            </div>
                                        </span>
                                        <div className="cart-grade">
                                            <span className=" icon-start-active fa fa-star"></span>
                                            <div className="num">{item.num}</div>
                                        </div>
                                        <div className="game-desc">{item.desc}</div>
                                        <div className="game-bz">{item.bz}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )
    }
    return (
        <Scroll onScroll={forceCheck}>
            <div className='bui-container'>
                <div className="bui-tab home-tab-content">
                    <div className="tab-content">
                        <div className="tab-content-item">
                            {rendernew()}
                        </div>
                    </div>    
                </div>
            </div>
        </Scroll>
    )
}
