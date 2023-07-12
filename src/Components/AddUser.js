import React, { Component } from "react"

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      name: "",
      tel: "",
      permission: "",
    }
  }

  isChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value,
    })
    //padage to item
    var item = {}
    item.id = this.state.id
    item.name = this.state.name
    item.tel = this.state.tel
    item.permission = this.state.permission
  }

  kiemTraTrangThai = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div className="col">
          <form>
            <div className="card bg-light mb-3 mt-2">
              <div className="card-header">Thêm mới user vào hệ thống</div>
              <div className="card-body">
                <h5 className="card-title" />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên User"
                    onChange={(event) => this.isChange(event)}
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Điện thoại"
                    onChange={(event) => this.isChange(event)}
                    name="tel"
                  />
                </div>
                <div className="form-group">
                  <select
                    className="custom-select"
                    onChange={(event) => this.isChange(event)}
                    name="permission"
                    required>
                    <option value>Chọn quyền mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal</option>
                  </select>
                  <div className="invalid-feedback">
                    Example invalid custom select feedback
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="reset"
                    className="btn btn-block btn-primary"
                    onClick={() =>
                      this.props.add(
                        this.state.name,
                        this.state.tel,
                        this.state.permission,
                      )
                    }
                    value="Thêm mới"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }

  render() {
    return <div>{this.kiemTraTrangThai()}</div>
  }
}

export default AddUser
