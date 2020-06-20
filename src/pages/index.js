import React from "react"
import { Link } from "gatsby"
import axios from "axios"
import "../css/style.css"
import Layout from "../components/layout"
import { symbol } from "prop-types"
import ChartData from "../components/ChartData"

export default class index extends React.Component {
  state = {
      companyName: "",
      previousClose: "",
      marketCap: "",
      change: "",
      symbol: "",
      topStocks: [],
      Yearweekhigh: "",
      Yearweeklow: "",
      avgTotalVolume: "",
      peRatio: ""
      

  }


  componentDidMount() {
    const API_KEY = 'pk_1f08b43b5e0b426da9a29414ae2394c0';
    axios.get(`https://cloud.iexapis.com/stable/stock/market/previous?token=${API_KEY}`)
      .then(res => {
        
        console.log(res)

        const topStocks = res.slice(1);
        this.setState({ topStocks })

      })
  }
  

  clickHandler = (event) => {
          if (event.keyCode === 13) {
          const query = event.target.value;
          const API_KEY = 'pk_1f08b43b5e0b426da9a29414ae2394c0';
      axios.get(`https://cloud.iexapis.com/stable/stock/${query}/quote?token=${API_KEY}`)
          .then(res => {
              const companyName = res.data['companyName'];
              this.setState({ companyName })

              const previousClose = res.data['previousClose'];
              this.setState({ previousClose })

              const marketCap = res.data['marketCap'];
              this.setState({ marketCap })

              const change = res.data['change'];
              this.setState({ change })

              const symbol = res.data['symbol'];
              this.setState({ symbol })

              const Yearweekhigh = res.data['week52High'];
              this.setState({ Yearweekhigh })

              const Yearweeklow = res.data['week52Low'];
              this.setState({ Yearweeklow })

              const avgTotalVolume = res.data['avgTotalVolume'];
              this.setState({ avgTotalVolume })

              const peRatio = res.data['peRatio'];
              this.setState({ peRatio }) 


          })
      }
  }



  render() {
      return (
          <Layout>
              <div class = "main-div">
                  <input type="search" class="main-search" onKeyDown={event => this.clickHandler(event)}/>
                  <table>
                    <tr>
                      <th>Ticker-Symbol</th>
                      <th>Market Cap</th>
                      <th>Previous Close</th>
                    </tr>
                    <tr>
                    <td>
                      <Link to='/details/' state={{

                        setState: this.state.symbol, 
                        companyName: this.state.companyName, 
                        previousClose: this.state.previousClose,
                        marketCap: this.state.marketCap,
                        change: this.state.change,
                        Yearweekhigh: this.state.Yearweekhigh,
                        Yearweeklow: this.state.Yearweeklow,
                        avgTotalVolume: this.state.avgTotalVolume,
                        peRatio: this.state.peRatio

                        }}>
                          {this.state.symbol}</Link>


                          <Link to='../components/ChartData/' state={{

                          setState: this.state.symbol, 
                          companyName: this.state.companyName, 
                          previousClose: this.state.previousClose,
                          marketCap: this.state.marketCap,
                          change: this.state.change,
                          Yearweekhigh: this.state.Yearweekhigh,
                          Yearweeklow: this.state.Yearweeklow,
                          avgTotalVolume: this.state.avgTotalVolume,
                          peRatio: this.state.peRatio

                          }}></Link>
                        </td>
                      <td>{this.state.marketCap}</td>
                      <td>{this.state.previousClose}</td>
                    </tr>
                  </table>
              </div>
              <div>
                {
                  this.state.topStocks.length && this.state.topStocks.map(stock => (
                  <h1>{stock.symbol}</h1>
                  ))
                }
              </div>
              <ChartData />
          </Layout>
      )
  }
}


