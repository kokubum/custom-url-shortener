const addProtocol = require("../utils/addProtocol");
const validUrl = require("valid-url");
const UrlService = require("../services/urlService");
const AppError = require("../utils/appError");

const shortenUrl = async (req, res) => {
  let { originalUrl, custom, customName } = req.body;
  originalUrl = addProtocol(originalUrl);
  if (!originalUrl || !validUrl.isUri(originalUrl)) {
    return next(new AppError("Invalid URL", 400));
  }

  try {
    if (!custom || (custom && !customName)) {
      const url = await UrlService.findNormalUrl(originalUrl);
      if (url) {
        return sendShortenUrl(url, res);
      }
      const newUrl = await UrlService.createNormalUrl(originalUrl);
      return sendShortenUrl(newUrl, res);
    }

    const url = await UrlService.findUrlByCode(customName);
    if (url) {
      return next(new AppError("Custom name already in use", 400));
    }

    const newCustomUrl = await UrlService.createCustomUrl(
      originalUrl,
      customName
    );
    return sendShortenUrl(newCustomUrl, res);
  } catch (err) {
    next(err);
  }
};

const sendShortenUrl = (shortenUrl, res) => {
  res.status(201).json({
    status: "success",
    data: {
      url: shortenUrl,
    },
  });
};

module.exports = {
  shortenUrl,
};
