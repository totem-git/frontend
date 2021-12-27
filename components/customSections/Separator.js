import { getStrapiMedia } from "utils/media"

const Separator = ({ data }) => {
    const styles = data.motif ?
        {
            backgroundImage: `url(${getStrapiMedia(data.motif.url)})`,
        } : {}

    return (
        <div style={styles} className="dinamic-separator h-16 my-4"></div>
    )
}

export default Separator
