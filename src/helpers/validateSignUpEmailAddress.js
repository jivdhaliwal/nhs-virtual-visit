const REGEX = /^(?:(?:[^<>()[\]\\.,;:\s@"]+(?:\.[^<>()[\]\\.,;:\s@"]+)*)|(?:".+"))@(?:[A-Za-z0-9-]+\.)*(\w+\.\w+)$/;

export default (email, emailDomains) => {
    if(emailDomains === undefined) {
        if (process.env.NEXT_PUBLIC_SIGN_UP_EMAIL_DOMAIN === undefined)
            return true;
        emailDomains = process.env.NEXT_PUBLIC_SIGN_UP_EMAIL_DOMAIN.split(",");
    }
    const matches = email.match(REGEX)
    console.dir(matches)
    if(!matches)
        return false
    return emailDomains.includes(matches[1])
};