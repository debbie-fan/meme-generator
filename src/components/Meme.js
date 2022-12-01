function Meme() {
    function handleClick() {
        console.log("I was clicked!")
    }

    return (
        <main>
            <form>
                <input type="text" className="form-input" placeholder="Top text"/>
                <input type="text" className="form-input" placeholder="Bottom text"/>
                <button className="form-button" onClick={handleClick}>Get a new meme image 🖼</button>
            </form>
        </main>
    );
}

export default Meme;