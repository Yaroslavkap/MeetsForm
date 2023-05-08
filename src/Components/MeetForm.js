import React from 'react'
import Swal from 'sweetalert2'

class MeetForm extends React.Component{

  
  userAdd = {}

    constructor(props) {
        super(props)
        this.state = {
            tower: "",
            floor: "",
            room: "",
            date: "",
            len: "",
            comments: "",
        }
    }

  render() {
    return(
      <form ref={(el) => this.myForm = el}>
          
          <h2>Бронирование переговорной</h2>

          <div className="field">
            <select onChange={(e) => this.setState({ tower: e.target.value })}>
              <option defaultValue="" value="">Башня</option>
              <option value="A">А</option>
              <option value="B">Б</option>
            </select>
          </div>

          <div className ="field">
            <select onChange={(e) => this.setState({ floor: e.target.value })}>
              <option defaultValue="" value="">Этаж</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
            </select>
          </div>

          <div className = "field">
            <select onChange={(e) => this.setState({ room: e.target.value })}>
              <option defaultValue="" value="">Переговорная</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          
          <div className="field">
            <input id="DateTime" type="datetime-local"
            min="2023-01-07T00:00" max="2024-06-14T00:00"
            onChange={(e) => this.setState({ date: e.target.value })}>
            </input>
          </div>

          <div className="field">
            <select onChange={(e) => this.setState({ len: e.target.value })}>
              <option defaultValue="" value="">Длительность</option>
              <option value="30">30 минут</option>
              <option value="60">60 минут</option>
              <option value="90">90 минут</option>
              <option value="120">120 минут</option>
            </select>
          </div>

          <div className="field">
            <textarea placeholder='Комментарии' onChange={(e) => this.setState({ comments: e.target.value })}></textarea>
          </div>
          
          <div className="field field-buttons">
              <button className="btn1" type='button' onClick={() => {
                if(this.state.tower !== "" && this.state.floor !== "" && this.state.room !== "" && this.state.date !== "" && this.state.len !== "") {
                  this.userAdd = {
                    tower: this.state.tower,
                    floor: this.state.floor,
                    room: this.state.room,
                    date: this.state.date,
                    len: this.state.len,
                    comments: this.state.comments,
                }
                
                this.props.onAdd(this.userAdd)
              } else {
                //console.log("Error")
                Swal.fire({
                  title: 'Ошибка',
                  text: 'Все поля (кроме "Комментарии") обязательны для заполнения!',
                  icon: 'error',
              })
              }
            }

              }>Отправить</button>

              <button className="btn2" type='button' onClick={() => {
                this.myForm.reset()
                this.setState({
                  tower: "",
                  floor: "",
                  room: "",
                  date: "",
                  len: "",
                  comments: "",
                })
              }
            }>Очистить</button>
          </div>

          

      </form>
    )
  }

}

export default MeetForm