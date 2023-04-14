import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Form.css"



export default function PizzaForm(props) {

    const min = 1;
    const max = 100;
    const [value, setValue] = useState(1);
    const handleChange = event => {
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setValue(value);
    }

    const { change, submit, errors } = props;

    const { size, orginal, galic, bbq, spinach, pepperoni, sausage, bacon, italian, grilled, green, mushroom, diced, black, roasted, artichoke, three, pineapple, extra, gulten, instruction } = props;



    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valuesToUse = type === 'checkbox' ? checked : value;
        change(name, valuesToUse);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }
    return (
        <form id="pizza-form" className="pizza-form" onSubmit={onSubmit}>
            <div className="build-own">
                <h3>Build Your Own Pizza</h3>
                <img
                    className="main-image"
                    src="https://www.akcrust.com/hubfs/Blog_Images/Wood%20Fired%20Par-baked%20Crust.jpg"
                    alt="Large Pizza"
                />
                <div className="build-form">
                    <h4>Build Your Own Pizza</h4>

                    <label className="size-dropdown">
                        <div className="choice-size">
                            <p className="choice">Choice of Size</p>
                            <p>Required</p><br></br>
                        </div>
                        <div className="select">
                            <select id="size-dropdown" value={size} name="size" onChange={onChange}>
                                <option value="a">---Select Size---</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="XL">Extra Large</option>
                            </select>
                        </div>
                    </label>
                    <div className="choice-size">
                        <p className="choice">Choice of Sauce</p>
                        <p>Required</p>
                    </div>
                    <div className="sauce">
                        <label className="original">
                            <input
                                type="radio"
                                name="original"
                                checked={orginal}
                                onChange={onChange}
                            />Original Red
                        </label><br></br>
                        <label className="garlic">
                            <input
                                type="radio"
                                name="garlic"
                                checked={galic}
                                onChange={onChange}
                            />Garlic Sauce
                        </label><br></br>
                        <label className="bbq">
                            <input
                                type="radio"
                                name="bbq"
                                checked={bbq}
                                onChange={onChange}
                            />BBQ Sauce
                        </label><br></br>
                        <label className="spinach">
                            <input
                                type="radio"
                                name="spinach"
                                checked={spinach}
                                onChange={onChange}
                            />Spinach Alfredo
                        </label>
                    </div>
                    <div className="topping">
                        <div className="choice-size">
                            <p className="choice">Add Topping</p>
                            <p>Choose up to 10</p>
                        </div>
                        <div className="check">
                            <label>
                                <input
                                    type='checkbox'
                                    name='pepperoni'
                                    checked={pepperoni}
                                    onChange={onChange}
                                />Pepperoni
                            </label><br></br>
                            <label>
                                <input
                                    type='checkbox'
                                    name='sausage'
                                    checked={sausage}
                                    onChange={onChange}
                                />Sausage
                            </label><br></br>
                            <label>
                                <input
                                    type='checkbox'
                                    name='bacon'
                                    checked={bacon}
                                    onChange={onChange}
                                />Canadian Bacon
                            </label><br></br>
                            <label>
                                <input
                                    type='checkbox'
                                    name='Spicy Italian Sauage'
                                    checked={italian}
                                    onChange={onChange}
                                />Spicy Italian Sausage
                            </label><br></br>
                            <label>
                                <input
                                    type='checkbox'
                                    name='grilled'
                                    checked={grilled}
                                    onChange={onChange}
                                />Grilled Chicken
                            </label><br></br>
                            <label>
                                <input
                                    type='checkbox'
                                    name='green'
                                    checked={green}
                                    onChange={onChange}
                                />Green Pepper
                            </label><br></br>
                            <label>
                                <input
                                    type='checkbox'
                                    name='mushroom'
                                    checked={mushroom}
                                    onChange={onChange}
                                />Mushroom
                            </label><br></br>
                            <label>
                                <input
                                    type='checkbox'
                                    name='diced'
                                    checked={diced}
                                    onChange={onChange}
                                />Diced Tomatos
                            </label><br></br>
                            <label>
                                <input
                                    type='checkbox'
                                    name='black'
                                    checked={black}
                                    onChange={onChange}
                                />Black Olives
                            </label><br></br>
                            <label>
                                <input
                                    type='checkbox'
                                    name='roasted'
                                    checked={roasted}
                                    onChange={onChange}
                                />Roasted Garlic
                            </label><br></br>
                            <label>
                                <input
                                    type='checkbox'
                                    name='artichoke'
                                    checked={artichoke}
                                    onChange={onChange}
                                />Artichoke Hearts
                            </label><br></br>
                            <label>
                                <input
                                    type='checkbox'
                                    name='three'
                                    checked={three}
                                    onChange={onChange}
                                />Three Cheese
                            </label><br></br>
                            <label>
                                <input
                                    type='checkbox'
                                    name='pineapple'
                                    checked={pineapple}
                                    onChange={onChange}
                                />Pineapple
                            </label><br></br>
                            <label>
                                <input
                                    type='checkbox'
                                    name='extra'
                                    checked={extra}
                                    onChange={onChange}
                                />Extra Cheese
                            </label><br></br>
                        </div>
                        <div className="substitute">
                            <div className="choice-size">
                                <p className="choice">Choice of Substitute</p>
                                <p>Choose up to 1</p>
                            </div>
                            <div className="gluten">
                                <label>
                                    <input
                                        type='checkbox'
                                        name='gluten'
                                        checked={gulten}
                                        onChange={onChange}
                                    />Gluten Free Crust (+ $100)
                                </label>
                            </div>
                            <div className="instruction">
                                <label id="special-text" className="#special-text">
                                    <div className="choice-size">
                                        <p className="choice">Special Instruction</p>
                                        <p>{errors.instruction}</p>
                                    </div>
                                    <input
                                        id="name-input"
                                        className="#name-input"
                                        placeholder="Anything else you'd like to add?"
                                        value={instruction}
                                        onChange={onChange}
                                        name="instruction"
                                        type="text"
                                    />
                                </label>
                                <div className="summary">
                                    <input
                                        type="number"
                                        placeholder="Quanity"
                                        value={value}
                                        onChange={handleChange}
                                    /><div id="order-button" className='submit-button'>
                                        <Link to="/confirmation"><input type="submit" value="Place the order!" /></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}