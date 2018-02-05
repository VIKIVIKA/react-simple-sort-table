import React from 'react';

class Sortable extends React.Component {
  render () {
    return(
      <div>
        <table cellSpacing="0" cellPadding="5" border="1" ref="myTable">
          <tbody>
            <tr>
              {
                this.props.theads.map((headVal, i) => {
                  return (<th key={i}>
                      {headVal}
                    </th>
                  )
                })
              }
            </tr>
            {
              this.props.tblValues.map((tableData, index) =>{
                    return (<tr key={index}>
                        {
                          this.props.theads.map((data, i)=>{
                            return (<td key={i}>
                                  {tableData[data]}
                                </td>
                            )
                          })
                        }
                      </tr>
                    )
                  }
                )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Sortable;
