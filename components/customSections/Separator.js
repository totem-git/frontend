import { getStrapiMedia } from "utils/media"

const Separator = ({ data }) => {
    const styles = data.motif ?
        {
            backgroundImage: `url(${getStrapiMedia(data.motif.url)})`,
        } : {}

    return (
        <div className="py-6">
            <div style={styles} className="dinamic-separator h-16 bg-white"></div>
        </div>
    )
}

export default Separator
