import React from 'react'

function Items({description,title,img,price,amount}) {
    return (
        <div>
                          <div className="items-info">
                            <div className='product-img'>
                                <img src= {img} alt="image" />
                            </div>
                            <div className="title">
                                <h2>{title}</h2>
                                <p>{description}</p>
                            </div>
                            <div className="add-minus-quantity">
                                <i class="fas fa-minus minus"></i>
                                <input type="text" placeholder="2" />
                                <i class="fas fa-plus add"></i>
                            </div>
                            <div className="price">
                                <h3>{price}</h3>
                            </div>
                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>
                            </div>
                            <hr />
                        </div>
        </div>
    )
}

export default Items
