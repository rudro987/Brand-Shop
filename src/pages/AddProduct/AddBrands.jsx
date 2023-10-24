
const AddBrands = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const brandName = form.brandName.value;
        const image = form.image.value;
        const slider1 = form.slider1.value;
        const slider2 = form.slider2.value;
        const slider3 = form.slider3.value;
        const brands = {brandName, image, slider1, slider2, slider3}
        fetch('https://brand-shop-server-side-71jynkzgp-tanvir-hossains-projects.vercel.app/addBrands', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(brands)})
        .then(response => response.json())
        .then(data => {
            if(data.insertedId){
                alert('successfully submitted')
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <label>Brand Name</label>
            <input type="text" name="brandName" className="text-black" /><br /><br />
            <label>Image</label>
            <input type="text" name="image" className="text-black" /><br /><br />
            <label>Slider1</label>
            <input type="text" name="slider1" className="text-black" /><br /><br />
            <label>Slider2</label>
            <input type="text" name="slider2" className="text-black" /><br /><br />
            <label>Slider3</label>
            <input type="text" name="slider3" className="text-black" /><br /><br />
            <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBrands;