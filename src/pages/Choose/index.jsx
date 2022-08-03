import React,{useState,useEffect, memo} from "react";
import { connect } from "react-redux";
import { ChooseWrapper } from './style'
import { actionCreators } from './store/index'
import New from "@/components/New";
import Focus from '@/components/Focus'
import classnames from 'classnames'


const Choose = (props) => {
    // const [gameData,setGameData] = useState([]);
    const { gameList,videoList } = props;
    const { getGameListDispatch,getVideoListDispatch } = props;
    const [tab,setTab] = useState('新游');
    const changeTab = (target) => {
        setTab(target);
    }
    useEffect(() => {
        getGameListDispatch();
        getVideoListDispatch();
    },[]);
    return(
        <ChooseWrapper>
            <ul>
                <li></li>
                <li className={classnames({active:tab==="新游"})} onClick={changeTab.bind(null,'新游')}>新游</li>
                <li className={classnames({active:tab==="关注"})} onClick={changeTab.bind(null,'关注')}>关注</li>
                <li></li>
            </ul>
            {tab === "新游" && <New gameList={gameList}/>}
            {tab === "关注" && <Focus videoList={videoList}/>}
        </ChooseWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        gameList: state.choose.gameList,
        videoList: state.choose.videoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGameListDispatch(){
            dispatch(actionCreators.getGameList());
        },
        getVideoListDispatch(){
            dispatch(actionCreators.getVideoList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(memo(Choose));
