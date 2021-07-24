import styled from "styled-components";
import HomeLink from "../Navbar/HomeLink";

const DIV = styled.div`
    #head{
        margin: 0 auto;
        max-width: 85%;
        text-align: center;
        margin-top: 30px;
        font-size: 25px;
    }

    .form{
        margin: 0 auto;
        max-width: 60%;
        /* border: 1px solid white; */
        text-align: center;
    }
    form{
        margin: 0 auto;
        /* border: 1px solid white; */
        max-width: 70%;
        margin-bottom: 20px;
    }
    label{
        display: block;
        margin-top: 30px;
        margin-bottom: 5px;
        text-align: left;
    }
    input{
        margin: 0 auto;
        background-color: white;
        border: none;
        border-radius: 4px;
        color: black;
        padding: 5px;
        width: 100%;
    }
    button{
        padding: 10px;
        margin-top: 30px;
        border: 1px solid #db1ab1;
        border-radius: 20px;
        margin-right: 5px;
        transition: all linear 0.2s;
        cursor: pointer;
    }
    button:hover{
        border: 1px solid #db1ab1;
        background-color: #db1ab1;
        color: black;
        font-weight: 550;
    }
`

const Newsletter = () => {
    return (  
        <DIV className = "newsletter">
            <HomeLink></HomeLink>
            <div className = "form">
                <p id = "head">Newsletter</p>
                <form>
                    <label>First Name</label>
                    <input type = "text"></input>
                    <label>Last Name</label>
                    <input type = "text"></input>
                    <label>Email</label>
                    <input type = "email"></input>
                    <button>Subscribe</button>
                </form>
            </div>
        </DIV>
    );
}
 
export default Newsletter;