import { useState, memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import SearchBox from '@/components/common/search-box'
import { Container, ContentWrapper,HotList,HotTag,ResultWrapper } from './style'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from "./store";
import Scroll from "@/components/common/Scroll";
import Lazyload,{ forceCheck } from "react-lazyload";

function Search(props) {
    const {
        hotList,
        hotTag,
        serachResult
    } = props;
    const {
        getHotListDispatch,
        getHotTagDispatch,
        getSearchResultDispatch
    } = props;
    const navigate = useNavigate();
    const [query,setQuery] = useState('');
    const [show,setShow] = useState(false);
    const searchBack = () => {
        setShow(false);
    }
    const handleQuery = (q) => {
        // console.log(q);
        setQuery(q);
    }
    useEffect(() => {
        setShow(true);
        if(!hotList.length){
            getHotListDispatch();
        }
        if(!hotTag.length){
            getHotTagDispatch();
        }
        if(!serachResult.length){
            getSearchResultDispatch();
        }
    },[]);


    const renderHotList = () => {
        let list = hotList ? hotList : [];
        return (
            <ul className='bui-tag-list'>
                {
                    list.map(item => {
                        return(
                            <li className="bui-item" 
                                key={item.id}
                                onClick={() => setQuery(item.title)}
                            >
                                <span>{item.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    const renderHotTag = () => {
        let list = hotTag ? hotTag : [];
        return (
            <ul className='bui-tag-list'>
                {
                    list.map(item => {
                        return(
                            <li className="bui-item" 
                                key={item.id}
                                onClick={() => setQuery(item.tag)}
                            >
                                <span>{item.tag}</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    const renderSearchResult = () => {
        let list = serachResult ? serachResult : [];
        return (
            <div className='bui-mod-wrap'>
                {
                    list
                    .filter((item) => {
                        return true == new RegExp('^.*' + query + '.*$').test(item.name)
                    })
                    .map(item => {
                        return (
                            <div className='crad-game' key={item.id}>
                                <div className="game-img">
                                    <img src={item.pic} className='item-pic'/>
                                </div>
                                <div className="game-info-wrap">
                                    <h4 className="game-name">{item.name}</h4>
                                    <span className="game-info">
                                        <span className="tag-name">{item.tag1}</span>
                                        <span className="tag-name">{item.tag2}</span>
                                        <span className="tag-name">{item.tag3}</span>
                                    </span>
                                    <div className="bui-rate">
                                        <span className="rate-num">评分:{item.mark}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <CSSTransition
            in={show}
            timeout={800}
            appear={true}
            classNames="fly"
            unmountOnExit
            onExit={() => {
                navigate('/');
            }}  
        >
            <Container>
                <div className="search_box_wrapper">
                    <SearchBox 
                        back={searchBack}
                        newQuery={query}
                        handleQuery={handleQuery}
                    >
                    </SearchBox>
                </div>
                <ContentWrapper show={!query}>
                    <Scroll>
                        <HotList>
                            <h1 className="bui-title">热门游戏</h1>
                            {renderHotList()}
                        </HotList>
                        <HotTag>
                            <h1 className="bui-title">热门标签</h1>
                            {renderHotTag()}
                        </HotTag>
                    </Scroll>
                </ContentWrapper>
                <ContentWrapper show={query}>
                    <Scroll onScroll={forceCheck}>
                        <ResultWrapper>
                            {renderSearchResult()}
                        </ResultWrapper>
                    </Scroll>
                </ContentWrapper>
            </Container>
        </CSSTransition>
    )
}
const mapStateToProps = (state) => {
    return {
        // 通过api请求 --- 热搜
        hotList: state.search.hotList,
        hotTag: state.search.hotTag,
        serachResult: state.search.serachResult
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHotListDispatch(){
            dispatch(actionCreators.getHotList());
        },
        getHotTagDispatch(){
            dispatch(actionCreators.getHotTag());
        },
        getSearchResultDispatch() {
            dispatch(actionCreators.getSearchResult());
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(memo(Search))