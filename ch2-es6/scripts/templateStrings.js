// Template strings
// Use backtick "`" and curly braces to concat instead of using "+" 
// Template strings honor whitespace too!
fullName = (lastName, firstName, middleName) => {
    console.log(`${firstName} ${middleName} ${lastName}`)
}

fullName('Grout', "Brennan", "James");

// Great for email templates
emailTemplate = (params) => {
    console.log(
    `
        Hello ${params.firstName},

        Thanks for ordering ${params.qty} tickets to ${params.event}.

        Order Details
            ${params.firstName} ${params.middleName} ${params.lastName}
            ${params.qty} x $${params.price} = $${params.qty*params.price} to ${params.event}

        You can pick your tickets up at will call 30 minutes before the show.

        Thanks,

        ${params.ticketAgent}

    `
    )
}

const emailTemplateParams = {
    lastName: 'Grout',
    firstName: 'Brennan',
    middleName: 'James',
    qty: 10,
    event: 'Weird Al Concert',
    price: 150,
    ticketAgent: 'Lizzie'
}

emailTemplate(emailTemplateParams);


// You can format HTML now with template strings too!
const article = {
    title: "Bambi",
    body: "Bambi's mom died it was sad and Disney is crazy"
}

createWebsite = () => {
    document.body.innerHTML = 
    `
        <section>
            <header>
                <h1>The HTML Blog</h1>
            </header>
            <article>
                <h2>${article.title}</h2>
                ${article.body}
            </article>
            <footer>
                <p>copyright ${new Date().getFullYear()} | The HTML Blog</p>
            </footer>
        </section>
    `
}

createWebsite();