const UrlService = require("../services/urlService");
const AppError = require("../utils/appError");

const redirectToUrl = async (req, res, next) => {
  const urlCode = req.params.urlCode;

  try {
    const url = await UrlService.findUrlByCode(urlCode);
    if (!url) {
      return next(new AppError("Url not found", 404));
    }

    return res.redirect(url.originalUrl);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  redirectToUrl,
};
