import React, { Component } from 'react';
import axios from 'axios';

import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";
import WebtoonList from "../component/WebtoonList";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            day : 'mon', //default Monday
            webtoonList : [] //init data
        };
    }

        componentDidMount() {
            this._getList();
        }

        _getList() {
            // webtoon_list get
            const apiUrl = 'dummy/webtoon_list.json';

            axios.get(apiUrl)
                .then(data => {
                    this.setState({
                        webtoonList : data.data.webtoonList
                    });
                })
                .catch(error => {
                    console.log(error);
                }) 
        }


    render () {
        return (
            <div>
                <Header/>
                <Gnb />
                {
                    this.state.webtoonList.length > 0 ? (
                        <WebtoonList list={
                            this.state.webtoonList.filter(webtoon => (
                                webtoon.day === this.state.day
                            ))
                        } />
                    ) : (
                        <span>
                            LODING...
                        </span>
                    )
                }
                <Footer />
            </div>
        )
    }
}

export default Main;