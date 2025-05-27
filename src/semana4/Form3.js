import './styles/Form.css';
import { useState } from 'react';

export default function Form3() {
    const [person, setPerson] = useState({
        name: 'Anavitoria',
        artwork: {
            title: 'Esquinas',
            releaseYear: '2024',
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAnwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xAA0EAABAwMDAgUDAwMEAwAAAAABAAIDBBEhBRIxE0EGIlFhcRQygSORsUJioRVy4fAWQ1L/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBAAX/xAAhEQADAQADAAEFAQAAAAAAAAAAAQIRAyExEgQTMkFRIv/aAAwDAQACEQMRAD8A83IstYUrx7LjplPOw5JXbeFw5hWDcFpxJcWyuMXWjclbEbieF2mE42kLuMC+RhRtjddSiJ4GCEWmYS/p24yiKVgc7lDQ0r5HWLmj8qy6FovVeN0rOVuo1SOvDtFtMbjY3XpFE3oU4FubJNpGlRwtZkEi3CfSOAYB6BTclDonCPqukeWei6u1gsEIHFoJ7+qjM5vkqbSpIO3hcSEEIMSknupNxsu0LDpsscV91rrRAfGXsIICHqGBzcoSmqxE4wONrlD8sMc/wOpprnnhFGoBSKvl+lla6MHY4XNl1HXskhErHbrGxCJUKcnizaZ7z5WGymFH2LiD7hHGojYNtruPusEzBl2fQJ3zoz7aFpoj7n8Lg0p7tKNfVFzs4b8qF1Y65DbWRK2C4kgEBaMtOPZQy3HYj8JgyoO3JFz6hcF8UjrTN6Z9ey1cgP2xe0uJ5KYUenuqeZA2/qVj4YW5a66BlkeDZj3D4KNXoupwfDRo4mhzqkX9AVYfDdEXTARuJCodKZHyDdI63uV6N4PaWPBGQupnI9AoI+lGG91zXT/Txvle4hreVPDYx7ibFLtTjbPTSxyONnAhT2x8Iij1SlqI29GVrvUXUoey17rzGVrdPq+tBJK2NjrG4wrSaqabTxJGTZzbghIp4VTOljNbTRDzytHyVwdYoR/72H4K82npqqolLpal1vREUlLDEQfqL3HquTC+DPQBX09Q0iOQXSuscOoD78pRG2N4AZJ5uAR2RrQ90Vnm5HCXbNU4HR6lA57WzWt7oGqaWSGWjF2O5aEurg4brXCUP1ubTiW/dnuVs06F3GLSrdUiUkjjn2XPWPVdk2tYKB8jZQDHcEdihmOIuCeCqydsNMvlsf8ACjL8gD1UFw4Fckue4O7nC4zdLj4d8Of6jEJZH47C6s3/AIpTGARyNacenCi8IRGOijBHYK0NBtlTVTbK1KSw8v8AEHh2bTGmaEmSHvnIVc2uly2y9rr6VtTTvje0FrgQQV5FXUr9M1SalcDdjvL7jsncVvxk/LH7OKODa8Fzl6N4UlhZtZuyqKDHtDnGx9CmWjaiIZ27CMFUPsR4ewh94wWoeqF2Z9Ev0fUW1VKOLgIsyWyRuAUt+4OgT6poUWpRmBzNkbjclqZUenQUOnR0jMsYLAnlHs8zdyFmfskuTYLH52UyI9S0ISNLoza/KVapojZ9ObFSuDJ2m9+Lq6Nla9tsEFRfTQF+4i6Ban0a+1jKTpfhvUonNf19xByHd1ZI6SWOP9QC6dtEbRYAW+UNVyNtysr+s5N+Ffq4QWnCp2vQ+c47q51swAOVVdYtID3yly8Yyp2SiMdZ5st773Dj5uUM2QmS/ZSPIBJurzzNJWOH5PZE6VCZ6yNv9yABO4fKsejUkjWmQCxdj8Jd1iG8a+TLrDr2naTTNY9+54HDVHH47onv2Bjx7lV1kdBHIWvbuf7i6CayOp1R0MMVtv3C1knFhS909Dbr8D6d07TdrRdedeItVbquptqGQllvLu9VdTohboMxp2+bbcjv7qg6j0mObDE17XXBIP8AIXcXoPLnxI5S+RwIB90RRRPDr2suqRjnOyDlHNBZ/SFdLIqHvh2qngnaNxLXYKubZj0DfBAVE0yW0jTbhWqCobs8x+5I5V3o3iYVV66KYedrg0clRUviGgq2kOkbut3KFqqqhFM6CpftL757KDS9J0ubzwlkhHNjlTNsuSWaMqOpBkcGklh+1EvqLDlRSwRQxt6QtbiyGe/1QN4HOMmfWO/+kPLVOfeyjLb5XLm4QNhPAGrc53dKqhm45TmVmLlKqqRjH3cQAukFs8uY6ykD/wDn3UVs8rpjfMF6bPHQz0mn60434aPVelaTDSvjaCAMZBXnemP6ZAI8p/lWaOqdBEHAnbb9lHzds9H6eV8Syz+G4Z39SF4YRwQu9N0GGkqXSPcJHk5JC1pdZNJE25I4R0spYzGSlOmh3wQ5pgGN2sC828faE6nq31sDT0iQS30/6VbhrdJSQ755g1w7JB4g8RRajRvY1oLS0pk2Jvj3dKtSyyNd0zawaCCiWnuTdC0jCX5ObWRzYLhXRhFaJ6er6LgW9kzjrZKloER89+El6AHJU8TWtOHEflFUaAqaHMukQ6jB+vOYpBgOB7oT/R9RoniWhqgXNyLd0/8ADemw1tC4yuJPUP8ACYO0YQElrrhR1qeYepxcs/HsR0dbqjxtq6Ug93NOLpg1xcM8o0t2N2oN+HYwp6CVL9GxfhbIXIcByuZZ2tGSgObIapwa1V+siNQ8g/ams8vWO1tytfSO24Buikx+Hkm3gqVjGtAuc3WmgGO/cLtucd+y9BnmJDaijD2W/ZPmR7qa3sq9p021213Ks1HI17ADwpuRdl/A1g40eX9IDunMJY8gO7+qrVI/oSlpODwpp6etlu+CqdC1I9Y9+B+vU2mQxl80jGvIwLqkajNA2mcKdwdbuERqVCbl9RUyyP8A7ikkxjhka0EkXuU/jlaJ59mQ6kq27WusmkcoIwkdPs8waO+LpvRwvfbaDYK2Uee60J23yuTgoyOkO25Nljoo2jKZoGBmg6waJjoSTbddWEa5G8ZdZU3dG3gZUjXb3Ke+L5PUOjmUrtFqk1OIjBSyfVogT5hcKCAAsAPFkv1KlDXB7ODyp64GvSiOZMLfqxfhq0x8s5BLj8IGmit2Tegi4JSnI5VobR0vFhdxViotPDYw5zbk+q40WiMhD3NtbhWJsYAtZM4+P9sl5uXekfMULfIsjaRIiINoZlZGzz3909sWpOxGR5hyj6Ot6dg4cLhrAQApW0m7KW8fo+U14Noa6OQtueFYaCaGWPaSFQpI3xk7SVuTVKihDTe4OEt8e+Dfu4uy56tQ0ZZuLs9rFUatjZ9VJY43LKjxBPO3bbJ4K7oYHzAGRpBHJKdxcbn0n5uWb6QZQ08bbOdynEUobgD4QVPDsbkoi9lUkTNkz53nhcbZJOSoyVrqlvBRA6ENhA5CmYGj2S/6p9+V22RzjytO0ZbrDylRvLn4d+EMHP8AVNdGp3VE2+QeRnN0F5gUvGQwRA5Vg0ShM8rR2GSlvQ2VJjaCc4srxolF0IG9nEXJUSnWV3eIZU8LIWBg4C7cCeF0GNHuusJ+Ep8u37A3U8GXBCxgnsjqaN24YS6HQHxR3Yj4WWYoYGEssAp2sfwEhspSBZIjI8ngISroTUR9MGzr3F03kj2st3WRQ3IuFyrDXCawW0XhxxZlw3cglG0sFQ50zOnd8Js9oObdj8J5TssBhCVE30XiGimGGVDTC89j6f5TY5nork4FnQKw2w4EFdF7Gi6tr6OCrZ+pGLn+oYKBm8Os5ZMB/uT5+ol+k9cFLwrbpL8BcFru904m0WSInaWu9gVCKR7cPaR8pquX4xTil6ha2O5RcECKbSZUrYgzuiMw1FTtI4urNFAyjoCALEjPyg9GoxK8SyNOxvCl1afeem097CyRyVvQSRL4dgNbUmWThnf1V3iZtDR7JZoNG2ko2N22JFym7FiWI1vTfGAsaPVbXQGFph8/OoWN+2Oy7ZSi32p26EOP22+FplOL8KN2eiuMAp4SBZERQuBu4JjFSjGEWKdoAwluhinBIaZz5AXcdlKynt2TU07SQbLDE1owMrNCwHii4QOv0XVoTI0hskBEjPkJoQR9osgtQje+mlBOS0opfYNLZYfQVv1NNFK3F2gm3wii4uyXH90g8Ky9XSoweWEtP4KbuksspYzp7RIcG6Hq3N25stOmtfKX1tSNvK2dT6MpLOwaornMO1rcovRopK+cbr7G5cl0Mgc5wLb+iunh+m6VGCWBpfk4Xoqv8nm3OUHFogpgyMWxwlmnUprNWa3ljDuKY1ri1wA5OEw8O0Iga6Rw8zje6X6zBxC0BgHopb8ALgiw/C20m+EZhKOfZakk2Nus4AA78qOV44Kw48wDRddtaL8LFi889YKjaLBS2CxYsONEKMi60sXHGw0WQ9UBsdjssWLF6aIPCBIZXs/pbUusnUuP3WLEy/yA4/xAal7gDZKp3uJNytLEUgWSaX565gdwSP5XpdKBsA7ALFiqXhDf5EMgvI9xyQbBWKiAbCLeixYtQIRJx+Fjey0sRGHbsAlLpJHHd7FYsXAs/9k=',
        }
    });
    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }
    function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        });
    }
    function handleReleaseYearChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                releaseYear: e.target.value
            }
        });
    }
    function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        });
    }
    return (
        <section>
            <h2 className='titulo'>📋 Form3</h2>
            <form>
                <label>Name:</label>
                <input value={person.name} onChange={handleNameChange} />
                <label>Title of artwork:</label>
                <input value={person.artwork.title} onChange={handleTitleChange} />
                <label>Year of release:</label>
                <input value={person.artwork.releaseYear} onChange={handleReleaseYearChange} />
                <label>Image of artwork:</label>
                <input value={person.artwork.image} onChange={handleImageChange} />
            </form>
            <p>
                <i>{person.artwork.title}</i>{' by '}
                {person.name}<br />
                (released in {person.artwork.releaseYear})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </section>
    );
}