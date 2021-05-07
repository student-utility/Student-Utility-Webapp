import React, {useState} from 'react';

export const ResourceData = ()=>{
    var [data, setData] = useState({});
    var [count, setCount] = useState(0);
    var [table, setTable] = useState(<table>
        <tr>
        <th>CODE</th>
        <th>SUBJECT</th>
        <th>TEACHER</th>               
        <th>TOPIC</th>
        <th>DOWNLOAD</th>
        </tr>
    </table>)
        if(count<1)
        {
          setCount(count+1);
        fetch('https://student-utility-webapp.herokuapp.com/data',{
          method: 'GET',
          headers: { 
          "Content-type": "application/json; charset=UTF-8",
          "api":1.0
      }
    }).then(response=>response.json())
      .then(message => {
          setData(message);
          //console.log(data);
          //console.log(message);
          setTable(<table border='2px'>
            <thead>
              <tr>
                <th>CODE</th>
                <th>SUBJECT</th>
                <th>TEACHER</th>
                <th>TOPIC</th>
                <th>DOWNLOAD</th>
              </tr>
            </thead>
            <tbody>
              {message.Code.map((product,index) => (
                <tr key={index}>
                  <td>{product[0]}</td>
                  <td>{product[1]}</td>
                  <td>{product[2]}</td>
                  <td>{product[3]}</td>
                  <td><a href={product[5]} target='_blank'>{product[4].substring(12)}</a></td>
                </tr>
              ))}
            </tbody>
          </table>)
      })
    }
    return (
    <div>
        {table}
    </div>
    )
    }
