export function ContactUsForm() {
    return (
        <>
            <form
                action="https://gmail.us6.list-manage.com/subscribe/post"
                method="POST"
                noValidate
            >
                <input
                    type="hidden"
                    name="u"
                    value="e654510bb63cf53256868ec7e"
                />
                <input type="hidden" name="id" value="096b104afc" />
                <label htmlFor="MERGE0">
                    Email
                    <input
                        type="email"
                        name="EMAIL"
                        id="MERGE0"
                        value="mritunjaysaha17@gmail.com"
                        // onChange={(e) => {
                        //     this.setState({ emailValue: e.target.value });
                        // }}
                        autoCapitalize="off"
                        autoCorrect="off"
                    />
                </label>
                <label htmlFor="MERGE1">
                    First name
                    <input
                        type="text"
                        name="FNAME"
                        id="MERGE1"
                        value="John"
                        // onChange={(e) => {
                        //     this.setState({ fNameValue: e.target.value });
                        // }}
                    />
                </label>
                <label htmlFor="MERGE2">
                    Last name
                    <input
                        type="text"
                        name="LNAME"
                        id="MERGE2"
                        value="Doe"
                        // onChange={(e) => {
                        //     this.setState({ lNameValue: e.target.value });
                        // }}
                    />
                </label>
                <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                />

                <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                    aria-label="Please leave the following three fields empty"
                >
                    <label htmlFor="b_name">Name: </label>
                    <input
                        type="text"
                        name="b_name"
                        tabIndex="-1"
                        value=""
                        placeholder="Freddie"
                        id="b_name"
                    />

                    <label htmlFor="b_email">Email: </label>
                    <input
                        type="email"
                        name="b_email"
                        tabIndex="-1"
                        value=""
                        placeholder="youremail@gmail.com"
                        id="b_email"
                    />

                    <label htmlFor="b_comment">Comment: </label>
                    <textarea
                        name="b_comment"
                        tabIndex="-1"
                        placeholder="Please comment"
                        id="b_comment"
                    ></textarea>
                </div>
            </form>
        </>
    );
}
