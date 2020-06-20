//import { Link } from "gatsby"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import "../css/style.css"

const Details = props => {
  const [yourState, setYourState] = useState('');
  useEffect(() => {
      //axios.get(`https://cloud.iexapis.com/stable/stock/XOM/quote?token=pk_1f08b43b5e0b426da9a29414ae2394c0`)
        //.then(res => setYourState(res))

  }, []);

  return  <Layout>
    <div>
    <h1 class="details-company-name">{props.location.state.companyName}</h1>
    <div class = "details-div">
      <div class="details-div-1">
        <p>Open {} </p>
        <p>High {} </p>
        <p>Low {} </p>
        <p>52 WK HIGH <h2>{props.location.state.Yearweekhigh}</h2> </p>
        <p>52 WK LOW <h2>{props.location.state.Yearweeklow}</h2> </p>
      </div>
      <div class="details-div-2">
        <p>VOLUME</p>
        <p>AVG VOL <h2>{props.location.state.avgTotalVolume}</h2> </p>
        <p>MKT CAP <h2>{props.location.state.marketCap}</h2></p>
        <p>P/E RATIO <h2>{props.location.state.peRatio}</h2></p>
        <p>DIV/YIELD</p>
      </div>
    </div>
    </div>
      </Layout>;
    };

export default Details;
