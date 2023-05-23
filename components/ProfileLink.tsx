
type ProfileLinkProps = {
    link: string,
    text: string,
    svg: JSX.Element
}

const ProfileLink = (props: ProfileLinkProps) => {

    return (
        <a rel="noreferrer" target="_blank" href={props.link}
            className = "font-light text-xs md:text-lg bg-gray-100 hover:bg-gray-200 border border-black/10 shadow rounded-xl px-4 py-2">

            {props.svg}
            <div className="text-sky-800">
                {props.text}
            </div>
        </a>
    )
}

export default ProfileLink;