import React, { Component } from "react"

class TableDataRow extends Component {
  permissionShow = () => {
    if (this.props.permission === 1) {
      return "Admin"
    } else if (this.props.permission === 2) {
      return "Moderator"
    } else {
      return "Normal user"
    }
  }
  editClick = () => {
    this.props.editFunClick()
    this.props.changeEditUserStatus()
  }
  deleteButtonClick = (idUser) => {
    this.props.deleteButtonClick(idUser)
  }
  render() {
    return (
      <tr>
        <td>{this.props.stt + 1}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.tel}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <div className="btn-group">
            <div
              className="btn btn-warning edit"
              onClick={() => this.editClick()}>
              <i className="fa fa-edit">Sửa</i>
            </div>
            <div
              className="btn btn-danger edit"
              onClick={(idUser) => this.deleteButtonClick(this.props.id)}>
              <i className="fa fa-edit">Xóa</i>
            </div>
          </div>
        </td>
      </tr>
    )
  }
}

export default TableDataRow
