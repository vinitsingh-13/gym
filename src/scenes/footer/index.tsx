import Logo from "@/assets/Logo.png"

function Index() {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo"/>
                    <p className="my-5">Elevate your fitness experience at our gym, where cutting-edge facilities, expert guidance, and a vibrant community converge to inspire and transform.</p>
                    <p>&copy; Evogym All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Our Blogs</p>
                    <p className="my-5">Our Youtube Videos</p>
                    <p>Our Vlogs</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">support@evogym.com</p>
                    <p>+1-(333)-425-912</p>
                </div>
            </div>
        </footer>
    );
}

export default Index;