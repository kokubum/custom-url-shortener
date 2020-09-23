const shortid = require("shortid");
const { BASE_URL } = require("../config/config");
const Url = require("../models/urlModel");

const createNormalUrl = async (originalUrl) => {
  const urlCode = shortid.generate();
  const shortUrl = `${BASE_URL}/${urlCode}`;
  const url = await Url.create({
    originalUrl,
    urlCode,
    shortUrl,
  });
  return url;
};

const createCustomUrl = async (originalUrl, customName) => {
  const urlCode = customName;
  const shortUrl = `${BASE_URL}/${urlCode}`;
  const newUrl = await Url.create({
    originalUrl,
    urlCode,
    shortUrl,
  });

  return newUrl;
};

const findNormalUrl = async (originalUrl) => {
  return Url.findOne({ originalUrl, custom: false });
};

const findUrlByCode = async (urlCode) => {
  return Url.findOne({ urlCode });
};

module.exports = {
  createNormalUrl,
  createCustomUrl,
  findNormalUrl,
  findUrlByCode,
};
