import { Selector, t } from "testcafe";
import downloadsFolder from "downloads-folder";
import fs from "fs";

fixture("Dummy document download").page("localhost:3000");

const downloadedFileExists = async (downloadLocation, fileName) => {
  await t.expect(fs.existsSync(`${downloadLocation}/${fileName}`)).ok();
};

test("Should download a file", async () => {
  t.setNativeDialogHandler(() => true);
  const downloadLink = Selector("button").withText("Click to download file");
  const fileName = "file_example_XLS_10.xls";
  const downloadLocation = downloadsFolder();

  // click download button
  await t.click(downloadLink);
  await t.wait(3000);
  await downloadedFileExists(downloadLocation, fileName);
});
