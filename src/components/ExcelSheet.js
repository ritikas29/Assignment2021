import React,{ useState,useEffect } from 'react'
import MaterialTable, { MTableToolbar } from 'material-table'
import Axios from 'axios'
import { Link } from 'react-router-dom'
const ExcelSheet =()=>{
  const [iserror, setIserror] = useState(false)
const [errorMessages, setErrorMessages] = useState([])

       
     
      useEffect(() => {
       
        Axios.get('https://intense-tor-76305.herokuapp.com/merchants')
        .then(res => {
          setData(res.data)
        })
        .catch(error=>{
          setErrorMessages(["Cannot load user data"])
          setIserror(true)
        })
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
            var columns = [  { title: 'Name', field: "firstname" ,
            render: (rowData) => {
              return (
                <Link
                  style={{ color: '#063797' }}
                  to={{
                    pathname: '/DisplayDetails',
                    state: { object: rowData },
                  }}
                >
                  {' '}
                  {rowData.firstname}{' '}
                </Link>
              )
            },
           
          },
            {
        field: 'avatarUrl',
        title: 'Avatar',
        render: rowData => <img alt="" src={rowData.avatarUrl} style={{width: 50, borderRadius: '50%'}}/>
        },
      { title: 'E-mail', field: "email" },
      { title: 'Phone NUmber', field: "phone" },
      { title: 'Premium', field: "hasPremium" },
             
    ]
      const [data, setData] = useState([]); 
        return (
          <MaterialTable
            title="Editable Preview"
          columns={columns}
             data={data}
         
         />
        )
}
      
export default ExcelSheet