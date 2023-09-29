function Map() {
  return (
    <div
      id="container"
      className="md:w-[413px] h-[241px] overflow-hidden rounded-[15px] w-full mt-[36px] md:mt-0"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.568663225553!2d74.56123889999999!3d42.881947499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec86e346f0de9%3A0xc842fb1931428488!2zOSDQm9C10YHRhdC-0LfQvdCw0Y8g0YPQuy4sINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1692005854608!5m2!1sru!2skg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
