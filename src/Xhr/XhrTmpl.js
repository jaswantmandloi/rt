import React from 'react'
import './Xhr.css';


function XhrTmpl(props) {
    
    return (
        <div className="container">  
            Xhr
            

        {props.books.map((book) => {            
            return (<div key={book.id} >
                <span>{book.title}</span> 
                <span>===========</span>  
                <span>{book.author}</span>
                <span>===========</span>     
                <span>{book.price}</span>
                <span>===========</span>  
                <span>{book.year}</span>
            </div>)
        })}            

        </div>
    )

}
export default XhrTmpl