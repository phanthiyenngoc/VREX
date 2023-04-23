const FPTS3Config = {
  endpoint: "https://s3-sgn09.fptcloud.com",
  bucket: "vrex",
  folderImages: "uploads/t",
};

function getImageUrl(imgUrl, width = 600, isOverrideWidth = false, isOriginImages = false) {
  if (!imgUrl) return "";
  const cdnUrl = FPTS3Config.endpoint;
  if (isOriginImages) return `${cdnUrl}/${FPTS3Config.bucket}/uploads/s/${imgUrl}`;
  // return `${AzureConfig.endpoint}/${AzureConfig.folderImages}/${width}/${imgUrl}`
  let maxWidth = 1920;
  let isMobile = false;
  let isTablet = false;
  if (isMobile) maxWidth = 449;
  else if (isTablet) maxWidth = 800;
  if (isOverrideWidth) {
    maxWidth = width;
  }
  width = Math.min(maxWidth, width);
  if (width === undefined || width == 0) return `${cdnUrl}/${FPTS3Config.bucket}/${FPTS3Config.folderImages}/600/${imgUrl}`;
  if (width <= 100) return `${cdnUrl}/${FPTS3Config.bucket}/${FPTS3Config.folderImages}/100/${imgUrl}`;
  if (width <= 200) return `${cdnUrl}/${FPTS3Config.bucket}/${FPTS3Config.folderImages}/200/${imgUrl}`;
  if (width <= 300) return `${cdnUrl}/${FPTS3Config.bucket}/${FPTS3Config.folderImages}/300/${imgUrl}`;
  if (width <= 450) return `${cdnUrl}/${FPTS3Config.bucket}/${FPTS3Config.folderImages}/450/${imgUrl}`;
  if (width <= 600) return `${cdnUrl}/${FPTS3Config.bucket}/${FPTS3Config.folderImages}/600/${imgUrl}`;
  if (width <= 800) return `${cdnUrl}/${FPTS3Config.bucket}/${FPTS3Config.folderImages}/800/${imgUrl}`;
  if (width <= 1050) return `${cdnUrl}/${FPTS3Config.bucket}/${FPTS3Config.folderImages}/1050/${imgUrl}`;
  if (width <= 1200) return `${cdnUrl}/${FPTS3Config.bucket}/${FPTS3Config.folderImages}/1200/${imgUrl}`;
  if (width <= 1600) return `${cdnUrl}/${FPTS3Config.bucket}/${FPTS3Config.folderImages}/1600/${imgUrl}`;
  return `${cdnUrl}/${FPTS3Config.bucket}/${FPTS3Config.folderImages}/1920/${imgUrl}`;
}

export default getImageUrl;
