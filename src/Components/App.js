import { Component } from "react"
import "./../App.css"
import AddUser from "./AddUser"
import Header from "./Header"
import Search from "./Search"
import TableData from "./TableData"
import DataUser from "./Data.json"
import { v4 as uuidv4 } from "uuid"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hienThiForm: false,
      data: [],
      searchText: "",
      editUserStatus: false,
      userEditObject: {},
    }
  }

  componentDidMount() {
    // kiem tra xem co localStorage chua ?
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(DataUser)) // khoi tao
    } else {
      var temp = JSON.parse(localStorage.getItem("userData"))
      this.setState({
        data: temp,
      })
    }
  }




  deleteUser = (idUser) => {
    var temData = this.state.data
    temData = temData.filter((item) => item.id != idUser)
    this.setState({
      data: temData,
    });
    // day vao du lieu
    localStorage.setItem('userData', JSON.stringify(temData));

  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    })
  }
  editUser = (user) => {
    this.setState({
      userEditObject: user,
    });


  }
  getNewUserData = (name, tel, permission) => {
    var item = {}
    item.id = uuidv4()
    item.name = name
    item.tel = tel
    item.permission = permission
    var items = this.state.data
    items.push(item)

    this.setState({
      data: items,
    });
    localStorage.setItem('userData', JSON.stringify(items));
    
  }
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm,
    })
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl,
    })
  }
  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));

  }

  render() {
    // localStorage.setItem("userData", JSON.stringify(DataUser));

    var ketqua = []
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item)
      }
    })
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                userEditObject={this.state.userEditObject}
              />
              <TableData
                deleteUser={(idUser) => this.deleteUser(idUser)}
                editFun={(user) => this.editUser(user)}
                dataUserProps={ketqua}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <AddUser
                add={(name, tel, permission) =>
                  this.getNewUserData(name, tel, permission)
                }
                hienThiForm={this.state.hienThiForm}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default App


